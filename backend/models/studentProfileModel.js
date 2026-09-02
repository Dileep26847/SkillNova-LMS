import {
  FaTimes,
  FaUserGraduate,
  FaPhone,
  FaEnvelope,
  FaGraduationCap,
  FaLayerGroup,
  FaBriefcase,
  FaCertificate,
  FaUniversity,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaFileAlt,
} from "react-icons/fa";

// ============================================================
// STUDENT PROFILE MODAL
// ============================================================

function StudentProfileModal({
  student,
  close,
}) {

  if (!student) {
    return null;
  }

  // ==========================================================
  // FORMAT DATE
  // ==========================================================

  const formatDate = (date) => {

    if (!date) {
      return "Not provided";
    }

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return date;
    }

    return parsedDate.toLocaleDateString(
      "en-IN",
      {
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    );
  };

  // ==========================================================
  // PROFILE COMPLETION
  // ==========================================================

  const profileFields = [
    student.full_name,
    student.email,
    student.phone,
    student.education,
    student.college_name,
    student.graduation_year,
    student.batch_id,
    student.admission_date,
    student.address,
    student.city,
    student.state,
    student.country,
  ];

  const completedFields =
    profileFields.filter(
      (field) =>
        field !== null &&
        field !== undefined &&
        String(field).trim() !== ""
    ).length;

  const profilePercentage =
    Math.round(
      (completedFields / profileFields.length) * 100
    );

  // ==========================================================
  // PROFILE IMAGE
  // ==========================================================

  const profileImage =
    student.profile_image ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      student.full_name || "Student"
    )}&background=0891b2&color=fff&size=200`;

  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        bg-black/50
        backdrop-blur-sm
        flex
        items-center
        justify-center
        p-4
        overflow-y-auto
      "
      onMouseDown={(event) => {

        if (
          event.target ===
          event.currentTarget
        ) {
          close();
        }

      }}
    >

      {/* ====================================================
          MODAL
      ===================================================== */}

      <div
        className="
          bg-white
          rounded-3xl
          shadow-2xl
          w-full
          max-w-3xl
          max-h-[90vh]
          flex
          flex-col
          overflow-hidden
          my-4
        "
      >

        {/* ==================================================
            HEADER
        =================================================== */}

        <div
          className="
            flex
            items-center
            justify-between
            p-6
            border-b
            border-slate-100
            shrink-0
            bg-white
          "
        >

          <div
            className="
              flex
              items-center
              gap-4
            "
          >

            {/* PROFILE IMAGE */}

            <img
              src={profileImage}
              alt="Student profile"
              className="
                w-14
                h-14
                rounded-2xl
                object-cover
                border-2
                border-cyan-100
                shrink-0
              "
              onError={(event) => {

                event.currentTarget.src =
                  `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    student.full_name || "Student"
                  )}&background=0891b2&color=fff&size=200`;

              }}
            />

            {/* NAME */}

            <div>

              <h2
                className="
                  text-2xl
                  font-bold
                  text-slate-800
                "
              >
                Student Profile
              </h2>

              <p
                className="
                  text-sm
                  text-slate-500
                  mt-1
                "
              >
                {student.full_name || "Student"}
              </p>

            </div>

          </div>

          {/* CLOSE */}

          <button
            type="button"
            onClick={close}
            aria-label="Close student profile"
            className="
              w-10
              h-10
              rounded-xl
              bg-slate-100
              text-slate-500
              hover:bg-slate-200
              hover:text-slate-800
              flex
              items-center
              justify-center
              transition
              shrink-0
            "
          >
            <FaTimes />
          </button>

        </div>


        {/* ==================================================
            SCROLLABLE CONTENT
        =================================================== */}

        <div
          className="
            p-6
            overflow-y-auto
            flex-1
            min-h-0
            space-y-7
          "
        >

          {/* =================================================
              PROFILE COMPLETION
          ================================================== */}

          <section
            className="
              bg-cyan-50
              border
              border-cyan-100
              rounded-2xl
              p-5
            "
          >

            <div
              className="
                flex
                items-center
                justify-between
                mb-3
              "
            >

              <div>

                <p
                  className="
                    text-sm
                    font-semibold
                    text-cyan-800
                  "
                >
                  Profile Completion
                </p>

                <p
                  className="
                    text-xs
                    text-cyan-600
                    mt-1
                  "
                >
                  {completedFields} of{" "}
                  {profileFields.length}{" "}
                  important fields completed
                </p>

              </div>

              <span
                className="
                  text-lg
                  font-bold
                  text-cyan-700
                "
              >
                {profilePercentage}%
              </span>

            </div>

            <div
              className="
                w-full
                h-2
                bg-cyan-100
                rounded-full
                overflow-hidden
              "
            >

              <div
                className="
                  h-full
                  bg-cyan-600
                  rounded-full
                  transition-all
                "
                style={{
                  width:
                    `${profilePercentage}%`,
                }}
              />

            </div>

          </section>


          {/* =================================================
              BASIC INFORMATION
          ================================================== */}

          <ProfileSection
            title="Basic Information"
          >

            <ProfileItem
              icon={<FaUserGraduate />}
              label="Full Name"
              value={student.full_name}
            />

            <ProfileItem
              icon={<FaEnvelope />}
              label="Email"
              value={student.email}
            />

            <ProfileItem
              icon={<FaPhone />}
              label="Phone"
              value={student.phone}
            />

            <ProfileItem
              icon={<FaBriefcase />}
              label="Account Role"
              value={
                student.role
                  ? student.role.charAt(0).toUpperCase() +
                    student.role.slice(1)
                  : "Student"
              }
            />

          </ProfileSection>


          {/* =================================================
              ACADEMIC INFORMATION
          ================================================== */}

          <ProfileSection
            title="Academic Information"
          >

            <ProfileItem
              icon={<FaGraduationCap />}
              label="Education"
              value={student.education}
            />

            <ProfileItem
              icon={<FaUniversity />}
              label="College"
              value={student.college_name}
            />

            <ProfileItem
              icon={<FaGraduationCap />}
              label="Graduation Year"
              value={student.graduation_year}
            />

            <ProfileItem
              icon={<FaLayerGroup />}
              label="Batch"
              value={student.batch_name}
            />

            <ProfileItem
              icon={<FaCalendarAlt />}
              label="Admission Date"
              value={formatDate(
                student.admission_date
              )}
            />

          </ProfileSection>


          {/* =================================================
              ADDRESS INFORMATION
          ================================================== */}

          <ProfileSection
            title="Address Information"
          >

            <ProfileItem
              icon={<FaMapMarkerAlt />}
              label="Address"
              value={student.address}
              fullWidth
            />

            <ProfileItem
              icon={<FaMapMarkerAlt />}
              label="City"
              value={student.city}
            />

            <ProfileItem
              icon={<FaMapMarkerAlt />}
              label="State"
              value={student.state}
            />

            <ProfileItem
              icon={<FaMapMarkerAlt />}
              label="Country"
              value={student.country}
            />

          </ProfileSection>


          {/* =================================================
              PROFESSIONAL INFORMATION
          ================================================== */}

          <ProfileSection
            title="Professional Information"
          >

            <ProfileLink
              icon={<FaLinkedin />}
              label="LinkedIn"
              value={student.linkedin_url}
            />

            <ProfileLink
              icon={<FaGithub />}
              label="GitHub"
              value={student.github_url}
            />

            <ProfileLink
              icon={<FaFileAlt />}
              label="Resume"
              value={student.resume_url}
            />

          </ProfileSection>


          {/* =================================================
              CAREER STATUS
          ================================================== */}

          <ProfileSection
            title="Career Status"
          >

            <ProfileStatus
              icon={<FaBriefcase />}
              label="Placement Status"
              value={
                student.placement_status ||
                "Training"
              }
              type="placement"
            />

            <ProfileStatus
              icon={<FaCertificate />}
              label="Certificate Status"
              value={
                student.certificate_status ||
                "Pending"
              }
              type="certificate"
            />

          </ProfileSection>


          {/* =================================================
              PROFILE WARNING
          ================================================== */}

          {profilePercentage < 100 && (

            <div
              className="
                bg-amber-50
                border
                border-amber-200
                rounded-2xl
                p-5
                text-sm
                text-amber-700
              "
            >

              <strong>
                Profile information is incomplete.
              </strong>

              <p className="mt-1 leading-6">

                Some important student information
                has not been provided yet. Use
                Edit Student to complete the profile.

              </p>

            </div>

          )}

        </div>


        {/* ==================================================
            FOOTER
        =================================================== */}

        <div
          className="
            border-t
            border-slate-100
            p-6
            flex
            justify-end
            bg-white
            shrink-0
          "
        >

          <button
            type="button"
            onClick={close}
            className="
              px-6
              py-3
              rounded-xl
              bg-slate-800
              hover:bg-slate-900
              text-white
              font-medium
              transition
            "
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
}


// ============================================================
// PROFILE SECTION
// ============================================================

function ProfileSection({
  title,
  children,
}) {

  return (
    <section>

      <h3
        className="
          text-lg
          font-bold
          text-slate-800
          mb-4
        "
      >
        {title}
      </h3>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-4
        "
      >
        {children}
      </div>

    </section>
  );
}


// ============================================================
// PROFILE ITEM
// ============================================================

function ProfileItem({
  icon,
  label,
  value,
  fullWidth = false,
}) {

  return (
    <div
      className={`
        bg-slate-50
        rounded-2xl
        p-4
        ${fullWidth ? "md:col-span-2" : ""}
      `}
    >

      <div
        className="
          flex
          items-center
          gap-2
          text-xs
          text-slate-400
          mb-2
        "
      >

        <span className="text-cyan-600">
          {icon}
        </span>

        {label}

      </div>

      <p
        className="
          font-semibold
          text-slate-700
          break-words
        "
      >
        {value || "Not provided"}
      </p>

    </div>
  );
}


// ============================================================
// PROFILE LINK
// ============================================================

function ProfileLink({
  icon,
  label,
  value,
}) {

  return (
    <div
      className="
        bg-slate-50
        rounded-2xl
        p-4
      "
    >

      <div
        className="
          flex
          items-center
          gap-2
          text-xs
          text-slate-400
          mb-2
        "
      >

        <span className="text-cyan-600">
          {icon}
        </span>

        {label}

      </div>

      {value ? (

        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="
            font-semibold
            text-cyan-600
            hover:text-cyan-800
            hover:underline
            break-all
          "
        >
          {value}
        </a>

      ) : (

        <p
          className="
            font-semibold
            text-slate-700
          "
        >
          Not provided
        </p>

      )}

    </div>
  );
}


// ============================================================
// PROFILE STATUS
// ============================================================

function ProfileStatus({
  icon,
  label,
  value,
  type,
}) {

  const normalizedValue =
    String(value || "").toLowerCase();

  const isPositive =
    type === "placement"
      ? normalizedValue === "placed"
      : normalizedValue === "issued";

  return (
    <div
      className="
        bg-slate-50
        rounded-2xl
        p-4
      "
    >

      <div
        className="
          flex
          items-center
          gap-2
          text-xs
          text-slate-400
          mb-2
        "
      >

        <span className="text-cyan-600">
          {icon}
        </span>

        {label}

      </div>

      <span
        className={`
          inline-flex
          items-center
          px-3
          py-1
          rounded-full
          text-sm
          font-semibold
          ${
            isPositive
              ? "bg-green-100 text-green-700"
              : "bg-amber-100 text-amber-700"
          }
        `}
      >
        {value}
      </span>

    </div>
  );
}


export default StudentProfileModal;